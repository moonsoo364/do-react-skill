import React, {useState, useEffect} from 'react';
const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    // useEffect 리액트가 리렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () =>{
            console.log('cleanup');
            console.log(name);
        }
        
    },[name]);
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickName = e => {
        setNickname(e.target.value);
    }
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChangeName}/>
                <input name="nickname" value={nickname} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info