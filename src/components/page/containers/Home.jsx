import React, { Component } from 'react'
import HomeLayout from '../components/Home-layout'
import Categories from '../../categories/components/Categories'
import data from '../../../data/api.json'
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/Modal-container'
import Modal from '../../widgets/components/Modal'
import HandleError from '../../errors/containers/Handel-error'

export class Home extends Component {
  state = {
    modalVisible : false,
  }

  handleOpenModal = (event) => {
    this.setState({
      modalVisible:true,
    })
  }

  handleCloseModalClick = (event) =>{
    this.setState({
      modalVisible:false,
    })
  }

  

  render() {
  
    return (
      <HandleError>
        <HomeLayout >
        <Related />
        <Categories categories={data.categories} handleOpenModal={this.handleOpenModal}/>
        {
          this.state.modalVisible &&
            <ModalContainer>
                <Modal handleClick={this.handleCloseModalClick}>
                Esto es desde el componente modal
                </Modal>
            </ModalContainer>
        }
      </HomeLayout>
     </HandleError>
    )
  }
}

export default Home
