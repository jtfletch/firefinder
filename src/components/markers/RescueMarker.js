import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import rescueIcon from '@iconify/icons-mdi/account-alert'

const RescueMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={rescueIcon} className="rescue-icon" />
        </AdvancedMarker>
    )
}

export default RescueMarker