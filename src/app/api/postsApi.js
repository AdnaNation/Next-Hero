export const getPosts = async () => {
    const resData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resData.json();
    return data;
  };