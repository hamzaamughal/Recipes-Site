import React from 'react'
import setupTags from '../utils/setupTags'

const TagsList = ({ recipes }) => {
    const newTags = setupTags(recipes)
    return (
        <div>
            this is tags list
        </div>
    )
}

export default TagsList
