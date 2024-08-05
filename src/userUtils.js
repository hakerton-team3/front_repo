import axiosInstance from './axios/axiosInstance';

export const fetchLatestUserName = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('Access token not found');

    const response = await axiosInstance.get('/group-posts', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const posts = response.data.map(post => ({
      userName: post.userName,
      time: new Date(post.postDate)
    }));

    // Return the userName of the latest post
    return posts.length > 0 ? posts[0].userName : null;
  } catch (error) {
    console.error('Error fetching latest user name:', error);
    return null;
  }
};
