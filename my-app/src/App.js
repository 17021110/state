import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import logo from './img/TVT-Logo.png';
import Background from './img/logo1.png';
import img from './img/loiich.png';
import './App.css';

import Modal from 'react-modal';

import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HomePage from './components/HomePage';


const slideImages = [
  "https://web4s.vn/web4s/images/webp/thumb/thumb_400_Untitled-1-min.png",
  "https://img.thuthuatphanmem.vn/uploads/2018/10/03/anh-bai-bien-dep_111547828.jpg",
  "https://img.thuthuatphanmem.vn/uploads/2018/10/03/anh-bai-bien-dep-va-tho-mong_111547812.jpg"
];
const fadeImages = [
  "https://web4s.vn/web4s/images/webp/thumb/thumb_400_Untitled-1-min.png",
  "https://web4s.vn/web4s/images/webp/thumb/thumb_400_Untitled-1-min.png",
  "https://web4s.vn/web4s/images/webp/thumb/thumb_400_Untitled-1-min.png"
];
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const Slideshow1 = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} style={{ width: '100%', height: '400px', color: 'white', backgroundSize: '100%' }} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}


function App() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  // handleStae(){

  // }
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})`, backgroundRepeat: 'no-repeat', width: '100%', height: '400px', color: 'white', backgroundSize: '100%' }}>

              <div className='background'>
                <h1>Thiet ke giao dien Website chuyen nghiep</h1>
                <h1>hang dau viet nam</h1>
                <h3>
                  <span>61000+</span>
              khach hang
            </h3>
                <h3><span>Phien ban moi nhat V5</span></h3>
                <div>
                  <button type='button' style={{ color: 'white', backgroundColor: 'blue', borderWidth: 0, height: 32, borderRadius: 20, width: 150, }} onClick={openModal}>Dung thu ngay</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >

                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>

                    <div>ban co chac muon thuc hien hay khong ?</div>
                    <input type="text" value={state1}></input>
                    <div>
                      <button onClick={closeModal}>close</button>
                      <button onClick={closeModal}>close</button></div>

                  </Modal>
                </div>

              </div>

            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})`, backgroundRepeat: 'no-repeat', width: '100%', height: '400px', color: 'white', backgroundSize: '100%' }}>

              <div className='background1'>
                <h1>Thiet ke giao dien Website chuyen nghiep</h1>
                <h1>hang dau viet nam</h1>
                <h3>
                  <span>61000+</span>
              khach hang
            </h3>
                <h3><span>Phien ban moi nhat V5</span></h3>
                <button type='button' style={{ color: 'white', backgroundColor: 'blue', borderWidth: 0, height: 32, borderRadius: 20, width: 150, }} >Dung thu ngay</button>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})`, backgroundRepeat: 'no-repeat', width: '100%', height: '400px', color: 'white', backgroundSize: '100%' }}>
              <div className='background'>
                <h1>Thiet ke giao dien Website chuyen nghiep</h1>
                <h1>hang dau viet nam</h1>
                <h3>
                  <span>61000+</span>
              khach hang
            </h3>
                <h3><span>Phien ban moi nhat V5</span></h3>
                <button type='button' style={{ color: 'white', backgroundColor: 'blue', borderWidth: 0, height: 32, borderRadius: 20, width: 150, }} >Dung thu ngay</button>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
  // useEffect(async () => {
  //   axios.get('https://api.myip.com', {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     }
  //   })
  //     .then((res) => {
  //       // handle success
  //       console.log("response", res);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log('tuan', error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });

  // });
  return (
    <div className="App">
      {/* <div className='menu'>
        <img src={logo} className='logo' />
        <ul className='menu1'>
          <li>Trang chu</li>
          <li>gioi thieu</li>
          <li>Dich vu</li>
          <li>Kho giao dien</li>
          <li>Bang gia</li>
          <li>Thanh toan</li>
          <li>Tin tuc</li>
          <li>Lien he</li>
        </ul>
        <div className='menu2'>
          <a href='https://www.google.com/search?q=hinhf+anhr&sxsrf=ALeKk021rytA2h-lme4hOfpkzQPdX24Z4Q:1599807522989&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjJjfe4w-DrAhVOBKYKHV-FDhUQ_AUoAXoECAgQAw&biw=1440&bih=722#imgrc=bkGzQi3EXmuvrM'>dang nhap</a>
        </div>
      </div> */}
      <div className='hbody'>
        {/* <Slideshow></Slideshow> */}


      </div>
      {/* <div className='hbody1'>
        <h1>Tinh nag vuot troi cua phien ban V5</h1>
        <div className='hbody11'>
          <div className='halo'>
            <button className='V5' onClick={() => setState1(state1 => !state1)}>
              <div className='V51'>
                <div className='state'>
                  <div className='state1'>
                    <span>1</span>
                  </div>
                </div>

                <p>cong nghe tien tien dan dau xu huong</p>

              </div>
              {state1 &&
                <span>Web4s luôn không ngừng tìm tòi, học hỏi, cập nhật những xu hướng công nghệ tiên tiến nhất, mới nhất trên thế giới nhằm mang đến những trải nghiệm tốt nhất cho khách hàng.</span>

              }

            </button>
            <button className='V5' onClick={() => setState3(state3 => !state3)}>
              <div className='V51'>
                <div className='state'>
                  <div className='state1'>
                    <span>3</span>
                  </div>
                </div>

                <p>cong nghe tien tien dan dau xu huong</p>
              </div>
              {state3 && <div className='state2'>
                <span>Web4s luôn không ngừng tìm tòi, học hỏi, cập nhật những xu hướng công nghệ tiên tiến nhất, mới nhất trên thế giới nhằm mang đến những trải nghiệm tốt nhất cho khách hàng.</span></div>

              }

            </button>
            <button className='V5' onClick={() => setState5(state5 => !state5)}>
              <div className='V51'>
                <div className='state'>
                  <div className='state1'>
                    <span>5</span>
                  </div>
                </div>

                <p>cong nghe tien tien dan dau xu huong</p>
              </div>
              {state5 && <div className='state2'>
                <span>Web4s luôn không ngừng tìm tòi, học hỏi, cập nhật những xu hướng công nghệ tiên tiến nhất, mới nhất trên thế giới nhằm mang đến những trải nghiệm tốt nhất cho khách hàng.</span></div>

              }

            </button>
          </div> */}

      {/* <div className='halo1'>
            <button className='V5' onClick={() => setState2(state2 => !state2)}>
              <div className='V51'>
                <div className='state'>
                  <div className='state1'>
                    <span>2</span>
                  </div>
                </div>

                <p>cong nghe tien tien dan dau xu huong</p>
              </div>
              {state2 && <div className='state2'>
                <span>Web4s luôn không ngừng tìm tòi, học hỏi, cập nhật những xu hướng công nghệ tiên tiến nhất, mới nhất trên thế giới nhằm mang đến những trải nghiệm tốt nhất cho khách hàng.</span></div>

              }

            </button>
            <button className='V5' onClick={() => setState4(state4 => !state4)}>
              <div className='V51'>
                <div className='state'>
                  <div className='state1'>
                    <span>4</span>
                  </div>
                </div>

                <p>cong nghe tien tien dan dau xu huong</p>
              </div>
              {state4 && <div className='state2'>
                <span>Web4s luôn không ngừng tìm tòi, học hỏi, cập nhật những xu hướng công nghệ tiên tiến nhất, mới nhất trên thế giới nhằm mang đến những trải nghiệm tốt nhất cho khách hàng.</span></div>

              }

            </button>
            <button className='V5' onClick={() => setState6(state6 => !state6)}>
              <div className='V51'>
                <div className='state'>
                  <div className='state1'>
                    <span>6</span>
                  </div>
                </div>

                <p>cong nghe tien tien dan dau xu huong</p>
              </div>
              {state6 && <div className='state2'>
                <span>Web4s luôn không ngừng tìm tòi, học hỏi, cập nhật những xu hướng công nghệ tiên tiến nhất, mới nhất trên thế giới nhằm mang đến những trải nghiệm tốt nhất cho khách hàng.</span></div>

              }

            </button>
          </div>
        </div>
        <div className='halo3'>
          <img src={img}></img>
        </div>
      </div> */}
      <HomePage />
      <Modal></Modal>
    </div >
  );
}

export default App;
