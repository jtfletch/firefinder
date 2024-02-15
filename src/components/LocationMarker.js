import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire'

const LocationMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={locationIcon} className="location-icon" />
        </AdvancedMarker>
    )
}

export default LocationMarker