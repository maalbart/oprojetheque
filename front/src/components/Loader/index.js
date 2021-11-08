import React from 'react'
import SpinnerGIF from 'src/assets/donut.gif';
import './style.scss';

export default function Loader() {
  return (
    <div className="spinner">
      <img src={SpinnerGIF} alt="" className='spinnergif' />
    </div>
  )
}

/* import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export class LoaderEx extends Component {  
  render() {  
      return (  
          <div>  
              <div class="loader">  
                  <a class="item">Semantic UI Loader</a>  
              </div>  
              <Segment>  
                  <Dimmer active>  
                      <Loader />  
                  </Dimmer>  
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />  
              </Segment>  
          </div>  
      )  
  }  
}  

export default LoaderEx */
