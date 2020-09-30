import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import HobblyList from './HobblyList';
import { addnewHobbly, setActivehobby, deleteActivehobby, suaActivehobby, laodActivehobby, dangnhap, dangxuat1 } from '../Action/hobly';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



HomePage.propTypes = {

};

const ramdomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}

export default function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.ID);
    const login = useSelector(state1 => state1.user.ID1);
    // const loin = useSelector(state => state.hobby.list)
    console.log(login)
    console.log(hobbyList)

    const dispatch = useDispatch();

    const newId = ramdomNumber();
    const handleOnclick = () => {

        setColor('white');
        setState('');
        const newHobbly = {
            id: newId,
            title: state
        }
        const action = addnewHobbly(newHobbly);
        dispatch(action);

    }
    const validate = () => {
        if (state == '' || state == null) {
            setColor('red');
        }
        else {
            setColor('white');
        }
    }
    const handleOnclickActive = (hobby) => {
        const action = setActivehobby(hobby);
        // console.log(hobby)
        dispatch(action);
        setDisable(false)
        // handleOnclickActiveDelete(hobby);

    }
    const handleOnclickActiveDelete = (hobby) => {
        setDelete1(hobby);


    }
    const handleOnclickActiveDelete1 = (hobby) => {

        // console.log('delete')
        // console.log(hobby);
        const action1 = deleteActivehobby(hobby);
        dispatch(action1);
        setDisable(true)

    }
    const handleOnclickActiveSua = (hobby) => {
        const newHobbly = {
            id: hobby.id,
            title: hobby.title
        }

        const action1 = suaActivehobby(newHobbly);
        dispatch(action1);
        setDisable(true);
        setModalShow(false);

    }
    const changtext = (event) => {
        setState(event.target.value);


    }
    const changtext1 = (event) => {
        setDelete1({
            ...delete1,
            title: event.target.value
        });

        // setDelete1({
        //     ...delete1,
        //     title: state1
        // })
    }
    const changtext2 = (event) => {
        setValueLogin({
            ...valueLogin,
            username: event.target.value
        });
        // console.log(valueLogin)


    }
    const changtext3 = (event) => {
        setValueLogin({
            ...valueLogin,
            pass: event.target.value
        });



    }
    const handleOnclickActiveDangnhap = (hobby) => {

        const action3 = dangnhap(hobby);
        dispatch(action3);
        setModalShow1(false);


    }
    const handleOnclickActiveDangxuat = (hobby) => {
        console.log(hobby);
        const action10 = dangxuat1(hobby);
        dispatch(action10)
        // const action4 = dangxuat(hobby);
        // dispatch(action4);


    }


    const [delete1, setDelete1] = useState({})
    const [state, setState] = useState('')
    const [color, setColor] = useState('white');
    const [disable, setDisable] = useState(true);
    const [disable1, setDisable1] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [items1, setItems1] = useState([]);
    const [valueLogin, setValueLogin] = useState({ username: '', pass: '' })



    useEffect(() => {
        async function getdata() {
            axios.get('http:localhost:5000/accounts/register', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': '*/*',

                }
            })
                .then((res) => {
                    // handle success
                    // console.log("response", res);
                    // const item = [{ id: res.statusText }]
                    // console.log(item)
                    const item = [...items1];
                    item.push({ id: res.status, title: res.statusText })
                    const action2 = laodActivehobby(item);
                    dispatch(action2);
                    // items1.push({ id: res.status });
                    // console.log(item)
                })
                .catch(function (error) {
                    // handle error
                    console.log('tuan', error);
                })
                .then(function () {
                    // always executed
                });
        }
        getdata()

    }, []);
    return (
        <div>
            <h1>helllo hompage_ redux</h1>
            <input style={{ borderWidth: 1, borderColor: color }} onChange={changtext} value={state}></input>
            <Button onClick={() => { state == '' ? validate() : handleOnclick() }}>them</Button>
            <Button disabled={disable} onClick={() => handleOnclickActiveDelete1(delete1)}>delete</Button>

            <Button disabled={disable} variant="success" color="success" onClick={() => setModalShow(true)}>Sua </Button>
            <Modal

                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        sua doi thong tin
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" value={delete1.id} onChange={changtext1} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" onChange={changtext1} value={delete1.title} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleOnclickActiveSua(delete1)}>sua</Button>

                </Modal.Footer>
            </Modal>


            <HobblyList hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleOnclickActive}
                onHobbyClickDelelte={handleOnclickActiveDelete}
            ></HobblyList>
            {login === false ? <Button variant="success" color="success" onClick={() => setModalShow1(true)}>dang nhap </Button> : <Button onClick={() => handleOnclickActiveDangxuat(valueLogin)}>dang xuats</Button>}

            <Modal

                show={modalShow1}
                onHide={() => setModalShow1(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        dang nhap
                     </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" value={valueLogin.username} onChange={changtext2} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" onChange={changtext3} value={valueLogin.pass} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleOnclickActiveDangnhap(valueLogin)}>dang nhap</Button>


                </Modal.Footer>
            </Modal>


        </div >
    )
}

