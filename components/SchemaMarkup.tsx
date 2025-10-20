
/**
 * Legacy SchemaMarkup component - Now deprecated in favor of Next.js metadata API
 * Structured data should be handled through Next.js generateMetadata and
 * client-side script injection in components where needed.
 */
interface SchemaMarkupProps {
  schema: Record<string, any> | Array<Record<string, any>>;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SchemaMarkup = (props: SchemaMarkupProps) => {
  // This component is now deprecated. Use Next.js generateMetadata instead.
  // Returning null to prevent rendering legacy react-helmet-async Head
  return null;
};

export default SchemaMarkup;
