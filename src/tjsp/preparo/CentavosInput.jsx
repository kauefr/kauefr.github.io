export default function CentavosInput({ value, onChange, ...props }) {
    function maskValue(intValue) {
        return (intValue / 100).toLocaleString('pt-br', { style: "currency", currency: "BRL" });
    }
    function unmaskValue(maskedValue) {
        const digits = maskedValue.replace(/[^0-9]/g, '');
        const intValue = parseInt(digits, 10);
        return Number.isNaN(intValue) ? 0 : intValue;
    }

    return <input
        onChange={e => onChange(unmaskValue(e.target.value))}
        value={maskValue(value)}
        {...props}
    />
}