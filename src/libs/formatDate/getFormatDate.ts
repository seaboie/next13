export default function getFormatDate(dateString: string): string {
    return new Intl.DateTimeFormat('th-TH', { dateStyle: 'long'}).format(new Date(dateString))
}
