import DisplayHeader from "./DisplayHeader"
import DisplaySidebar from "./DisplaySidebar"
import ProfileInfo from "./ProfileInfo"
const DisplayProfile = () => {

    return (
        <div className="flex flex-col ">
            <DisplayHeader />
            <div className="flex flex-row min-h-screen">
                <DisplaySidebar />
                <ProfileInfo />
            </div>
        </div>
    )
}

export default DisplayProfile