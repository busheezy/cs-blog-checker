import axios from 'axios';

export async function isThereANewBlog(blogPostId: number): Promise<boolean> {
  const url = `https://blog.counter-strike.net/index.php/wp-json/wp/v2/categories?post=${blogPostId}`;

  try {
    await axios.get(url);
    return false;
  } catch (error: unknown) {
    return (
      axios.isAxiosError(error) &&
      error.response?.data?.code === 'rest_forbidden_context'
    );
  }
}
