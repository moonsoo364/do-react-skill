import React, {useState, useEffect} from 'react';
const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    // 마운트할 때만 실행
    useEffect(() => {
        console.log(name);
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