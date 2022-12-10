import { Button } from 'antd';


const DisplaySidebar = () => {

    return (
        <div className=" flex-col text-gray-50" style={{
            backgroundColor: "#1f2937",
            minHeight: "100vh"
        }}>
            <Button type="text" size='large' href='/' style={{ color: '#f9fafb' }}>
                Product Details
            </Button>
            <Button type="text" size='large' href='/profile' style={{ color: '#f9fafb' }}>
                My Profile
            </Button>
        </div>
    )
}


export default DisplaySidebar