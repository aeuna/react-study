const posts = [
  {
    id: 1,
    location: '서울',
    tag: ['mihyun', 'kyungeun'],
    photoUrl:
      'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    content: '서울 맛집 구경 #서울맛집 #daily',
    likes: 300,
    author: 'mihyun',
  },
  {
    id: 2,
    location: '부산',
    tag: ['aeuna', 'huiji'],
    photoUrl:
      'https://images.unsplash.com/photo-1622645613589-25ef26d1a297?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    content: '부산 맛집 구경 #부산맛집 #daily',
    likes: 300,
    author: 'aeuna',
  },
  {
    id: 3,
    location: '대학로',
    tag: ['huiji'],
    photoUrl:
      'https://images.unsplash.com/photo-1622647547642-c2223b652713?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    content: '대학로맛집 구경 #대학로',
    likes: 300,
    author: 'mihyun',
  },
];

export default function handler(req, res) {
  res.status(200).json(posts);
}
