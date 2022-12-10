import DisplaySidebar from "./DisplaySidebar"
import DisplayProdDetails from "./DisplayProdDetails"
import DisplayHeader from "./DisplayHeader"
const DisplayMainPage = () => {

    return (

        <div className="flex flex-col">
            <DisplayHeader />
            <div className="flex flex-row">
                <DisplaySidebar />
                <DisplayProdDetails />
            </div>
        </div>

    )
}


export default DisplayMainPage