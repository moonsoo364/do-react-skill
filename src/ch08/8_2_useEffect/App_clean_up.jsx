import React, {useState} from 'react';
import Info from '@/ch08/8_2_useEffect/info_clean_up';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info />}
        </div>
    )
}