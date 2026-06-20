// exact-simulation.ts
const topicId = "06-lunivers-et-la-gravitation";
const title = "L'Univers et la Gravitation";

function slugify(text: string) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

console.log("topicId:", topicId);
console.log("title:", title);
console.log("slugify(title):", slugify(title));
console.log("topicId.includes(slugify(title)):", topicId.includes(slugify(title)));
