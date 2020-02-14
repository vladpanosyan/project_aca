export function extractLikes(item: any): number | null {
  if (item.likes || item.likes === 0) {
    return item.likes;
  } else if (item.questionManyLikes) {
    return item.questionManyLikes;
  } else {
    return null;
  }
}
