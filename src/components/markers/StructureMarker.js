import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import structureIcon from '@iconify/icons-mdi/building'

const StructureMarker = ({ lat, lng }) => {
    return (
        <AdvancedMarker 
            position={{ lat: lat, lng: lng }}>
            <Icon icon={structureIcon} className="structure-icon" />
        </AdvancedMarker>
    )
}

export default StructureMarker