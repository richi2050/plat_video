import React, { Component } from 'react'
import HomeLayout from '../components/Home-layout'
import Categories from '../../categories/components/Categories'
import data from '../../../data/api.json'
import Related from '../components/Related';
import Modal from '../../widgets/containers/Modal'

export class Home extends Component {
  render() {
    return (
     <HomeLayout >
       <Related />
       <Categories categories={data.categories}/>
       <Modal>
         Este es un portal
       </Modal>
     </HomeLayout>
    )
  }
}

export default Home
