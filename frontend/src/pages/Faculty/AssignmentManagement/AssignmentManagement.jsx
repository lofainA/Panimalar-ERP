import React from "react";
import DetailBadge from "../../../components/DetailBadge/DetailBadge";

function AssignmentManagement() {
    return(
        <div class="w-100 d-flex flex-column h-100 p-4 mx-3">
            <div class="align-self-start w-100 mb-3">
                <h4>Assigment Records</h4>
                <hr/>
            </div>
            <div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">Year 3 <span class="badge badge-outline text-bg-dark">CSE A</span></h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-3 mb-3">
                            <DetailBadge name="Subject" data="OOAD"/>
                            <DetailBadge name="Due" data="30-7-2024"/>
                            <DetailBadge name="Submitted" data="15" color="success"/>
                            <DetailBadge name="Not Submitted" data="48" color="danger"/>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <table class="table table-striped-rows">
                                    <thead>
                                        <tr class="table-secondary">
                                            <td>Sl.no</td>
                                            <td>Name</td>
                                            <td>Roll no.</td>
                                            <td>Submitted</td>
                                            <td>Not Submitted</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignmentManagement