import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const getDeviceType = (width: number): DeviceType => {
    if (width < 768) return "mobile";
    if (width >= 768 && width < 1024) return "tablet";
    return "desktop";
}

export default function useResponsive() {
    const [webSize, setWebSize] = useState<DeviceType>(() => getDeviceType(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setWebSize(getDeviceType(window.innerWidth));
        };

        handleResize(); // 초기 사이즈 설정
        
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return webSize;
}