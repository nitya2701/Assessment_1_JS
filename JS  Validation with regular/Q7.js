//Write a JavaScript function to check whether a given value is IP value or not.

function isValidIPAddress(value) {
    // Regular expression to match IPv4 address
    var ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

    // Regular expression to match IPv6 address (simplified)
    var ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

    // Check if the value matches either IPv4 or IPv6 pattern
    if (ipv4Regex.test(value)) {
        // For IPv4, check each segment's range (0-255)
        var segments = value.split('.');
        return segments.every(function(segment) {
            return parseInt(segment, 10) >= 0 && parseInt(segment, 10) <= 255;
        });
    } else if (ipv6Regex.test(value)) {
        // For IPv6, no further validation is needed as regex pattern ensures validity
        return true;
    } else {
        // Neither IPv4 nor IPv6
        return false;
    }
}

// Example usage:
console.log(isValidIPAddress("192.168.0.1"));    // Output: true
