import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import bushfireIcon from '@iconify/icons-mdi/flame-circle'

const BushfireMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={bushfireIcon} className="bushfire-icon" />
        </AdvancedMarker>
    )
}

export default BushfireMarker