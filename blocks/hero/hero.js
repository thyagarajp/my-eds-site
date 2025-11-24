export default function decorate(block) {
  const content = block.querySelector('div');

  if (content) {
    content.classList.add('hero-content');
  }
}