import React, { useContext, useEffect } from 'react'
import FetchActivities from "../../apis/FetchActivities"
import { ActivitiesContext } from "../../context/ActivitiesContext"

import "./ActivityList.css"

const ActivityList = (props) => {
    const { activities, setActivities } = useContext(ActivitiesContext)
    useEffect(() => {
        const fetchData = async () => {
            const response = await FetchActivities.get("/all").catch()
            setActivities([...response.data, ...response.data])
        }

        fetchData()
    }, [])

    return (
        <div className="activity-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th id="type-column">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {activities && activities.map((activity, i) => {
                        return (
                            <tr key={i}>
                                <td>{activity.name}</td>
                                <td>{activity.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ActivityList
