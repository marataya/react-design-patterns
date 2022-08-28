import LargePersonList from './layout/people/LargePersonListItem'
import SmallPersonList from './layout/people/SmallPersonListItem'
import { LargeProductListItem } from './layout/products/LargeProductListItem'
import { SmallProductListItem } from './layout/products/SmallProductListItem'
import { SplitScreen } from './layout/SplitScreen'
import { NumberedList } from './NumberedList'
import RegularList from './RegularList'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import { UncontrolledModal } from './UncontrolledModal'
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserInfo } from './container/UserInfo'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader'
import { ProductInfo } from './container/ProductInfo'
import { DataSource } from './Datasource'
import axios from 'axios';
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm'
import { ControlledModal } from './ControlledModal'
import { useState } from 'react'
import UncontrolledOnboardingFlow from './UncontrolledOnboardingFlow'
import ControlledOnboardingFlow from './ControlledOnboardingFlow'
import printProps from './printProps'
import withUser from './withUser'
import UserInfoForm from './UserInfoForm'
import UserInfoFormV2 from './UserInfoFormV2'



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

// service functions

const getServerData = (url) => async () => {
  const controller = new AbortController();
  const response = await axios.get('http://localhost:8080' + url, { signal: controller.signal });
  return { "data": response.data, controller };
}

const getLocalStorageData = (key) => () => {
  const controller = new AbortController();
  return { "data": localStorage.getItem(key), controller }
}

const Text = ({ message }) => {
  console.log(message)
  console.log(typeof message)
  let m = message + "";
  return (<h1>{m}</h1>)
}



const StepOne = ({ gotoNext }) => {
  return <>
    <h1>Step 1</h1>
    <button onClick={() => gotoNext({ name: "Mothefucker" })}>Next</button>
  </>
}

const StepTwo = ({ gotoNext }) => {
  return <>
    <h1>Step 2</h1>
    <button onClick={() => gotoNext({ age: 55 })}>Next</button>
  </>
}

const StepThree = ({ gotoNext }) => {
  return <>
    <h1>Step 3</h1>
    <p>Congratz you qualify for our senior discount</p>
    <button onClick={() => gotoNext({})}>Next</button>
  </>
}

const StepFour = ({ gotoNext }) => {
  return <>
    <h1>Step 4</h1>
    <button onClick={() => gotoNext({ hairColor: 'orange' })}>Next</button>
  </>
}

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1)
  }

  const UserInfoWithLoader = withUser(UserInfo, '01');

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

          <Route path='/uncontrolled_modal' element={
            <UncontrolledModal>
              <LargeProductListItem product={products[0]} />
            </UncontrolledModal>
          } />

          <Route path='/controlled_modal' element={
            <><ControlledModal
              shouldShow={shouldShowModal}
              onRequestClose={() => setShouldShowModal(false)}
            >
              <LargeProductListItem product={products[0]} />
            </ControlledModal>
              <button onClick={() => setShouldShowModal(!shouldShowModal)}> {shouldShowModal ? 'Hide Modal' : 'Show Modal'} </button>
            </>
          } />

          <Route path='/currentuserloader' element={
            <CurrentUserLoader>
              <UserInfo />
            </CurrentUserLoader>} />

          <Route path='/userloader' element={
            <UserLoader userId="02">
              <UserInfo />
            </UserLoader>} />

          {/* DataLoader */}

          <Route path='/datasource_user' element={
            <DataSource resourceName="user" getDataFunc={getServerData('/users/01')}>
              <UserInfo />
            </DataSource>} />

          <Route path='/datasource_product' element={
            <DataSource resourceName="product" getDataFunc={getServerData('/products/02')}>
              <ProductInfo />
            </DataSource>} />

          <Route path='/datasource_localstorage' element={
            <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
              <Text />
              {/* {null} */}
            </DataSource>} />


          {/* ResourceLoader */}

          <Route path='/resourceloader_user' element={
            <ResourceLoader resourceUrl="/users/02" resourceName="user">
              <UserInfo />
            </ResourceLoader>} />

          <Route path='/resourceloader_product' element={
            <ResourceLoader resourceUrl="/products/01" resourceName="product">
              <ProductInfo />
            </ResourceLoader>} />

          <Route path='/uncontrolled_form' element={<UncontrolledForm />} />

          <Route path='/controlled_form' element={<ControlledForm />} />

          <Route path='/uncontrolled_onboarding' element={
            <UncontrolledOnboardingFlow onFinish={data => { console.log(data); alert('Onboarding complete'); }}>
              <StepOne key='01' />
              <StepTwo key='02' />
              <StepThree key='03' />
            </UncontrolledOnboardingFlow>
          } />

          <Route path='/controlled_onboarding' element={
            <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext} onFinish={data => { console.log(data); alert('Onboarding complete'); }}>
              <StepOne key='01' />
              <StepTwo key='02' />
              { onboardingData.age >=62 && <StepThree key='03' />}
              <StepFour key='04' />
            </ControlledOnboardingFlow>
          } />

          <Route path='printprops' element={<UserInfoWithLoader/>} />
          
          <Route path='edit_user' element={<UserInfoForm/>} />
          
          {/* <Route path='edit_user_v2' element={<UserInfoFormV2/>} /> */}
        
        </Route>
        <Route path="*" element={<main style={{ padding: "1rem" }}> <h1>404</h1> <p>Page Not Found</p> </main>} />

      </Routes>

    </div >
  );
}

export default App;
