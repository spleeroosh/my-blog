import { db } from './../firebase';

export default class MyBlogService {
  getPosts = async () => {
    const data = await db.collection("posts")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return doc.data();
        });
        console.log(data);
        return data;
      });
      return data;
  };

  addPost = (id, title, post) => {
    db.collection("posts").doc(`${id}`).set({
      id,
      title,
      post
    });
  };
  
};
