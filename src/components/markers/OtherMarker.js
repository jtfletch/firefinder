import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import otherIcon from '@iconify/icons-mdi/question-mark'

const OtherMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={otherIcon} className="other-icon" />
        </AdvancedMarker>
    )
}

export default OtherMarker