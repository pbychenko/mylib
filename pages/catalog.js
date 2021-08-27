import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import FilterForm from '../components/FilterForm';
import BookList from '../components/BookList'; 
import { Container,Card, Button } from 'react-bootstrap';
import Image from 'next/image'



const Catalog= ({ books }) => {
  console.log(books);
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <FilterForm />
        <BookList books={books}/>
      </Container>
    </>
  )
}

// export function getServerSideProps() {
//   return { props: { initialState: { books, counter: 17, todo: [{id:1, title:'y'} ]} } }
// }
export function getServerSideProps() {
  const books = [
    {
      id:1,
      autor: 'Пелевин',
      title: 'Амун Ра',
      isTaken: false,
    },
    {
      id:2,
      autor: 'Акунин',
      title: 'Рассказы',
      isTaken: true,
    },
    {
      id:1,
      autor: 'Толстой',
      title: 'Война и мир',
      isTaken: false,
    },
  ];
  return { props: { books } }
}

export default Catalog;