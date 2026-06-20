import React, { useState } from 'react';
import { Bug, Lightbulb, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import clsx from 'clsx';

interface FeedbackFormProps {
  subjectId: string;
  chapterId: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ subjectId, chapterId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'bug' | 'suggestion'>('suggestion');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (!accessKey) {
      // Fallback : open a mailto link so the message is never lost
      alert("Le service d'envoi automatique (Web3Forms) n'est pas activé ou la clé n'est pas configurée dans cette version de l'application.\n\nVotre client mail par défaut va s'ouvrir. Si rien ne se passe, envoyez directement un mail à geoffroy.streit@gmail.com.");
      const mailBody = encodeURIComponent(`[${type === 'bug' ? 'Bug' : 'Suggestion'}] Matière: ${subjectId} — Chapitre: ${chapterId}\n\n${message}`);
      window.open(`mailto:geoffroy.streit@gmail.com?subject=Brevet%202026%20%E2%80%94%20Signalement&body=${mailBody}`, '_self');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Brevet 2026 — ${type === 'bug' ? 'Bug Report' : 'Suggestion'} — ${subjectId}/${chapterId}`,
          topic: `Sujet: ${subjectId}, Chapitre: ${chapterId}`,
          type_de_retour: type,
          message: message,
          from_name: 'Élève — Espace Réussite Brevet 2026'
        })
      });

      const json = await response.json();
      if (response.status === 200) {
        setStatus('success');
        setMessage('');
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        console.error(json);
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="mt-20 border-t border-border pt-10 pb-4 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface/50 border border-border text-muted hover:text-foreground hover:bg-surface hover:border-border-hover transition-all duration-300 group shadow-sm"
        >
          <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="font-medium">Signaler un bug ou suggérer une amélioration</span>
        </button>
      </div>
    );
  }

  return (
    <div className="mt-20 border-t border-border pt-10 pb-4">
      <div className="max-w-2xl mx-auto bg-surface/30 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-success to-primary"></div>
        
        <h3 className="text-xl font-bold mb-6 text-foreground flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          Votre avis nous aide à nous améliorer
        </h3>
        
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h4 className="text-xl font-bold text-success">Merci pour votre retour !</h4>
            <p className="text-muted">Votre message a bien été envoyé. Nous allons l'étudier rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setType('suggestion')}
                className={clsx(
                  "flex flex-col flex-1 items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300",
                  type === 'suggestion' 
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.2)]" 
                    : "bg-background/50 border-border text-muted hover:bg-surface hover:border-border-hover"
                )}
              >
                <Lightbulb className={clsx("w-6 h-6", type === 'suggestion' && "animate-pulse")} />
                <span className="font-medium">Suggestion</span>
              </button>
              
              <button
                type="button"
                onClick={() => setType('bug')}
                className={clsx(
                  "flex flex-col flex-[1] items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300",
                  type === 'bug' 
                    ? "bg-danger/10 border-danger text-danger shadow-[0_0_15px_rgba(239,68,68,0.2)]" 
                    : "bg-background/50 border-border text-muted hover:bg-surface hover:border-border-hover"
                )}
              >
                <Bug className={clsx("w-6 h-6", type === 'bug' && "animate-bounce")} />
                <span className="font-medium">Signaler un Bug</span>
              </button>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground ml-1">
                {type === 'bug' ? 'Décrivez le problème rencontré :' : 'Quelle amélioration proposez-vous ?'}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={type === 'bug' ? "Ex: L'exercice 2 ne valide pas la bonne réponse..." : "Ex: Il serait génial d'ajouter plus d'exemples sur ce point..."}
                className="w-full bg-background border border-border rounded-xl p-4 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[120px] resize-y"
                required
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-danger text-sm bg-danger/10 p-3 rounded-lg border border-danger/20">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.</p>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-xl font-medium text-muted hover:text-foreground hover:bg-surface transition-colors"
                disabled={isSubmitting}
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={!message.trim() || isSubmitting}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                ) : (
                  <>
                    Envoyer <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
