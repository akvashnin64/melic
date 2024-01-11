import React from "react";
import { Link } from "react-router-dom";

const AdminNewsSection = () => {
    return(
        <div className="adminSection">
            <div>
                <Link>Добавить новость</Link>
            </div>

            <div>
                <Link>Удалить новость</Link>
            </div>

            <div>
                <Link>Изменить новость</Link>
            </div>
            
        </div>
    )
}

export default AdminNewsSection