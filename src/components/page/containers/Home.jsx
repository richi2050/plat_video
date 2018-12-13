import React, { Component } from 'react'
import HomeLayout from '../components/Home-layout'
import Categories from '../../categories/components/Categories'
import data from '../../../data/api.json'

export class Home extends Component {
  render() {
    return (
     <HomeLayout >
       <Categories categories={data.categories}/>
     </HomeLayout>
    )
  }
}

export default Home
