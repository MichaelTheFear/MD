function DoorSvg({value}) {
    const prefix__cls_5 = {
        fill:"none",
        stroke:"#ffffff",
        strokeLinecap:"round",
        strokeLinejoin:"round"
    }
    if(value===true){
        prefix__cls_5.stroke="#5f7373";
    }

        return (
            <svg
            id="prefix__Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
            <path d="M0 0h24v24H0z" fill="none" />
            <path style={prefix__cls_5} d="M5.66 1.86h12.68v20.27H5.61z" />
            <path
                style={prefix__cls_5}
                transform="rotate(180 14.875 12)"
                d="M13.56 11.84h2.63v.32h-2.63z"
            />
            </svg>
        )
}

export default DoorSvg
