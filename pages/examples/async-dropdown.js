import { AsyncDropdown } from '../../components/Fields';
import { Layout } from '../../examples/components';
import { useQuery } from '../../hooks';

const Page = () => {
  const { data, status } = useQuery('https://api.coincap.io/v2/assets?limit=5');
  const showCripto = (data) => (
    <option key={data.symbol} value={data.symbol}>
      {data.name}
    </option>
  );

  return (
    <Layout title="Async Dropdown">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>Dynamic values for the Dropdown element</strong>
          <br />
          Dropdown elements are an extended version of the HTML select based on the awesome NPM
          package <code>downshift</code>
        </p>

        <div className="mb-4">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Async crypto dropdown with placeholder
          </label>
          <div className="w-80">
            <AsyncDropdown status={status} placeholder="Select your favorite crypto">
              {data?.data?.map(showCripto)}
            </AsyncDropdown>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Async crypto dropdown with default selection
          </label>
          <div className="w-80">
            <AsyncDropdown status={status} defaultSelected="BTC">
              {data?.data?.map(showCripto)}
            </AsyncDropdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;
