export function formatDate(input: string): string {
    const d = new Date(input);
    return d.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  