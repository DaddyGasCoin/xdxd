import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';


const DisplayHeader = () => {

    return (
        <div className="" style={{
            backgroundColor: '#059669',
        }}>
            <Button type="text" size='large' href='/' icon={<HomeOutlined />} />
        </div>
    )
}

export default DisplayHeader
