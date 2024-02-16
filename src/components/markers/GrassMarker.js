import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import grassIcon from '@iconify/icons-mdi/grass'

const GrassMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={grassIcon} className="grass-icon" />
        </AdvancedMarker>
    )
}

export default GrassMarker