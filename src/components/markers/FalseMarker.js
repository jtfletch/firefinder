import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import falseIcon from '@iconify/icons-mdi/error'

const FalseMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={falseIcon} className="false-icon" />
        </AdvancedMarker>
    )
}

export default FalseMarker