# Instructions d'impression (Pandoc)

Pour convertir ces fichiers Markdown en documents imprimables (DOCX ou PDF), vous pouvez utiliser [Pandoc](https://pandoc.org/).

## Exemples de commandes

**Vers DOCX (Word) :**
```bash
pandoc Brevet_2026_Complet.md -o Brevet_2026_Complet.docx
```

**Vers PDF :**
```bash
pandoc Brevet_2026_Complet.md -o Brevet_2026_Complet.pdf --pdf-engine=xelatex
```

*(Note : la conversion PDF nécessite un moteur LaTeX comme texlive ou miktex installé sur votre machine).*