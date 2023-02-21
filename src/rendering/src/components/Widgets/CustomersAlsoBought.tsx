import { RecommendationWidgetProps } from '@sitecore-discover/react';
import RecommendedProducts from './RecommendedProducts';

interface CustomersAlsoBoughtProps extends RecommendationWidgetProps {
  rfkId: string;
}

const CustomersAlsoBought = (props: CustomersAlsoBoughtProps): JSX.Element => (
  <RecommendedProducts {...props} title="Customers also bought" />
);

export default CustomersAlsoBought;
