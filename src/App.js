import LargePersonList from './layout/people/LargePersonListItem'
import SmallPersonList from './layout/people/SmallPersonListItem'
import { LargeProductListItem } from './layout/products/LargeProductListItem'
import { SmallProductListItem } from './layout/products/SmallProductListItem'
import { SplitScreen } from './layout/SplitScreen'
import { NumberedList } from './NumberedList'
import RegularList from './RegularList'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import { Modal } from './Modal'
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserInfo } from './container/UserInfo'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader'
import { ProductInfo } from './container/ProductInfo'
import { DataSource } from './Datasource'
import axios from 'axios';



const LeftHandComponent = () => {
  return (
    <><RegularList
      items={people}
      resourceName="person"
      itemComponent={SmallPersonList}
    />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
    </>
  )
}

const RightHandComponent = () => {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonList}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  )
}

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ['golf', 'math']
  },
  {
    name: "Jane Garcia",
    age: 31,
    hairColor: "blonde",
    hobbies: ['medicine', 'biology', 'gymnastics']
  },
]

const products = [
  {
    name: "Flat Screen TV",
    price: '$300',
    description: "Huge LCD, a great deal", rating: 4.5
  },
  {
    name: "Basketball",
    price: '$10',
    description: "Like pros use",
    rating: 3.8
  }, {
    name: "Runnig shoes",
    price: '$120',
    description: "State-of-the-art tech for optimum running",
    rating: 4.2
  }
]

const getServerData = (url) => async () => {
  const controller = new AbortController();
  const response = await axios.get('http://localhost:8080' + url, {signal: controller.signal});
  return response.data;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/list' element={
            <SplitScreen leftWeight={1} rightWeight={3}>
              <LeftHandComponent />
              <RightHandComponent />
            </SplitScreen>} />
          <Route path='/modal' element={
            <Modal>
              <LargeProductListItem product={products[0]} />
            </Modal>
          } />

          <Route path='/currentuserloader' element={
            <CurrentUserLoader>
              <UserInfo />
            </CurrentUserLoader>} />

          <Route path='/userloader' element={
            <UserLoader userId="02">
              <UserInfo />
            </UserLoader>} />

          <Route path='/resourceloader_user_datasource' element={
            <DataSource resourceName="user" getDataFunc={getServerData('/users/01')}>
              <UserInfo />
            </DataSource>} />

          <Route path='/resourceloader_product_datasource' element={
            <DataSource resourceName="product" getDataFunc={getServerData('/products/02')}>
              <ProductInfo />
            </DataSource>} />
          <Route path='/resourceloader_user' element={
            <ResourceLoader resourceUrl="/users/02" resourceName="user">
              <UserInfo />
            </ResourceLoader>} />
          <Route path='/resourceloader_product' element={
            <ResourceLoader resourceUrl="/products/01" resourceName="product">
              <ProductInfo />
            </ResourceLoader>} />
        </Route>
        <Route path="*" element={<main style={{ padding: "1rem" }}> <h1>404</h1> <p>Page Not Found</p> </main>} />
      </Routes>

    </div >
  );
}

export default App;
