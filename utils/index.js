export const sortByWeight = (a, b) => {
    return (a.frontmatter.weight) - (b.frontmatter.weight)
  }


  // export const CosmetologyList = posts.filter(
  //   (post) => post.frontmatter.subtitle == "Cosmetology"
  // );

  // export const CardiologyList = posts.filter(
  //   (post) => post.frontmatter.subtitle == "Cardiology"
  // );

  // export const CosmetologyList = posts.filter(
  //   (post) => post.subtitle == "Cosmetology"
  // );

  // export const CardiologyList = posts.filter(
  //   (post) => post.subtitle == "Cardiology"
  // );