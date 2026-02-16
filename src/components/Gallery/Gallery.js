import './Gallery.css';

const prod = [
  {id:1,url:"/Ira.jpg",title:"Photo1",author:"Ira"},
  {id:2,url:"/Artem.jpg",title:"Photo2",author:"Artem"},
  {id:3,url:"/Kiril.jpg",title:"Photo3",author:"Kiril"}
];

function GalleryItem({id, url, title, author}) {
  if (!url) {
    return <p>Нет изображений для отображения</p>;
  }

  return (
    <div className="container">
    <div className="GalleryItem">
      <img className="gallery-img" src={url} alt={title}/>
      <p>{id} {author}</p>
    </div>
    </div>
  );
}

export function Gallery() {
  return (
    <div>
      {prod.map(item => (
        <GalleryItem key={item.id} {...item}/>
      ))}
    </div>
  );
}