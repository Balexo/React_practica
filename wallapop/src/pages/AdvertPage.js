import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { getUniqueAdvert, deleteAd } from "./service";
import Advert from "../components/Advert";

export function AdvertPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [confirmToDelete, setConfirmToDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    async function fetchAdvert() {
      try {
        const fetchedAdvert = await getUniqueAdvert(params.advertId);
        setAdvert(fetchedAdvert);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchAdvert();
  }, [params.advertId]);

  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      await deleteAd(advert.id);
      navigate("/v1/adverts");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteCancel = () => {
    setConfirmToDelete(false);
  };

  const handleDeleteRequest = () => {
    setConfirmToDelete(true);
  };

  return (
    <Layout title="Advert detail">
      {advert && (
        <Advert
          id={advert.id}
          photo={advert.photo}
          name={advert.name}
          price={advert.price}
          tags={advert.tags}
        />
      )}
      {!confirmToDelete && (
        <Button onClick={handleDeleteRequest} disabled={isDeleting}>
          Delete Advert
        </Button>
      )}
      {error && (
        <div className="Advert-delete-error" onClick={() => setError(null)}>
          {error}
        </div>
      )}
      {confirmToDelete && (
        <div className="Advert-confirm-to-delete">
          <p>Do you confirm to delete this ad?</p>
          <div>
            <Button onClick={handleDeleteConfirm} disabled={isDeleting}>
              Confirm
            </Button>
            <Button onClick={handleDeleteCancel} disabled={isDeleting}>
              Cancel
            </Button>
          </div>
        </div>
      )}
      {isDeleting && <div>Deleting Advert...</div>}
    </Layout>
  );
}

export default AdvertPage;
