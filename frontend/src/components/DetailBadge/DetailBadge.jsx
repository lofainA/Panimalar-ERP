import React from "react";

function DetailBadge({ name, data, color="secondary" }) {

    return(
        <ul class="list-group list-group-horizontal" key={ name }>
            <li class={`list-group-item text-white bg-${color}`}>{ name }</li>
            <li class="list-group-item">{ data }</li>
        </ul>
    );
}

export default DetailBadge;