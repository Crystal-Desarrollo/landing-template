export const handleImageError = (e, id) => {
  e.target.onerror = null
  if (id) return (e.target.src = 'https://placehold.co/1880x384?text=Image+not+found')
  return (e.target.src = 'https://placehold.co/320x144?text=Preview')
}
