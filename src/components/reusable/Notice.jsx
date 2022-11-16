import React,  { useState, useEffect } from "react";
import axios from "axios";
// import notData from "./notData";
function Notice() {

    const [Description, getDescription] = useState(null);

    const getAllDesc = () => {
        axios
            .get('http://localhost/laundashphp/notice.php')
            .then((response) => {
                // console.log(response.data);
                const allDesc = response.data;
                getDescription(allDesc);
                // console.log(allDesc);
                // console.log(Description);
            });
    };

    useEffect(() => {
        getAllDesc();
        const interval = setInterval(() => {
            getAllDesc();
        }, 10000);
        return () => clearInterval(interval);
    }, [])

    if (Description) {
        return (
            <div className="notice-body">
                <div className="notice">
                    
                    <ul>
                        <li>{Description[0].description}</li>
                        <li>{Description[1].description}</li>
                        <li>{Description[2].description}</li>
                        <li>{Description[3].description}</li>
                        <li>{Description[4].description}</li>
                        <li>{Description[5].description}</li>
                    </ul>
                </div>

            </div>
        );
    }

    return null;
};

// export default Details;


    // return (
    //     <div className="notice-body">
    //         <div className="notice">
    //             <h2 className="notice-head">Notice</h2>
    //             <ul>
    //                 <li>{notData[0].content}</li>
    //                 <li>Due to the power cut in Vellore, only delivery is available for 2nd October, 2022.</li>
    //                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit risus, fringilla quis diam in, laoreet feugiat orci. Quisque pharetra, leo vitae consectetur faucibus, tellus sem tincidunt sem, pulvinar faucibus felis nisl egestas lectus. Duis.</li>
    //             </ul>
    //         </div>

    //     </div>
    // );
// }

export default Notice;