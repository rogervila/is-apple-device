const isAppleDevice = (nav: Navigator): boolean => {
    /** @ts-expect-error TS2551 */
    const platform: undefined | string = nav?.userAgentData?.platform || nav?.platform

    if (typeof platform === 'undefined') {
        console.warn('Could not detect Navigator platform', { navigator: nav })
        return false;
    }

    return /IPAD|IPHONE|IPOD|MAC|IOS/.test(platform.toUpperCase())
}

export default isAppleDevice
