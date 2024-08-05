import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './AdminPanel.css';

const AdminPanel = () => {
    const { user } = useUser();
    const { t } = useContext(LanguageContext);

    if (!user) {
        return <section className="sections-container">{t["adminPanel_no_permissions"]}</section>;
    }

    return (
        <section className="admin-panel">
            {user.role && user.role === "admin" && (
                <>
                    <h1>{t["adminPanel_admin_panel"]}</h1>
                    <section className="sections-container">
                        <section className="admin-section">
                            <h2>{t["adminPanel_manage_catalog"]}</h2>
                            <p>{t["adminPanel_update_catalog_description"]}</p>
                            <button>{t["adminPanel_manage_catalog_button"]}</button>
                        </section>
                        <section className="admin-section">
                            <h2>{t["adminPanel_blog_content"]}</h2>
                            <p>{t["adminPanel_update_blog_description"]}</p>
                            <button>{t["adminPanel_manage_blog_button"]}</button>
                        </section>
                        <section className="admin-section">
                            <h2>{t["adminPanel_event_coordinator_accounts"]}</h2>
                            <p>{t["adminPanel_create_accounts_description"]}</p>
                            <button>{t["adminPanel_create_account_button"]}</button>
                        </section>
                        <section className="admin-section">
                            <h2>{t["adminPanel_online_bookings"]}</h2>
                            <p>{t["adminPanel_manage_bookings_description"]}</p>
                            <button>{t["adminPanel_manage_bookings_button"]}</button>
                        </section>
                        <section className="admin-section">
                            <h2>{t["adminPanel_payment_methods"]}</h2>
                            <p>{t["adminPanel_configure_payments_description"]}</p>
                            <button>{t["adminPanel_configure_payments_button"]}</button>
                        </section>
                        <section className="admin-section">
                            <h2>{t["adminPanel_update_personal_information"]}</h2>
                            <p>{t["adminPanel_update_information_description"]}</p>
                            <button>{t["adminPanel_update_information_button"]}</button>
                        </section>
                        <section className="admin-section">
                            <h2>{t["adminPanel_reports"]}</h2>
                            <p>{t["adminPanel_view_reports_description"]}</p>
                            <button>{t["adminPanel_view_reports_button"]}</button>
                        </section>
                    </section>
                </>
            )}
            {user.role && user.role === "coordinador" && (
                <>
                    <h1>{t["adminPanel_coordinator_panel"]}</h1>
                    <section className="sections-container">
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_manage_bookings_appointments"]}</h2>
                            <p>{t["adminPanel_manage_bookings_appointments_description"]}</p>
                            <button>{t["adminPanel_manage_bookings_appointments_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_logistics_communication"]}</h2>
                            <p>{t["adminPanel_coordinate_logistics_description"]}</p>
                            <button>{t["adminPanel_coordinate_logistics_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_plans_packages"]}</h2>
                            <p>{t["adminPanel_manage_plans_description"]}</p>
                            <button>{t["adminPanel_manage_plans_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_promotions_announcements"]}</h2>
                            <p>{t["adminPanel_manage_promotions_description"]}</p>
                            <button>{t["adminPanel_manage_promotions_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_reports"]}</h2>
                            <p>{t["adminPanel_generate_reports_description"]}</p>
                            <button>{t["adminPanel_generate_reports_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_user_queries"]}</h2>
                            <p>{t["adminPanel_respond_queries_description"]}</p>
                            <button>{t["adminPanel_respond_queries_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_budget"]}</h2>
                            <p>{t["adminPanel_manage_budget_description"]}</p>
                            <button>{t["adminPanel_manage_budget_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_suppliers"]}</h2>
                            <p>{t["adminPanel_manage_suppliers_description"]}</p>
                            <button>{t["adminPanel_manage_suppliers_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_guest_lists"]}</h2>
                            <p>{t["adminPanel_manage_guest_lists_description"]}</p>
                            <button>{t["adminPanel_manage_guest_lists_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_tasks_collaborators"]}</h2>
                            <p>{t["adminPanel_manage_tasks_description"]}</p>
                            <button>{t["adminPanel_manage_tasks_button"]}</button>
                        </section>
                        <section className="coordinator-section">
                            <h2>{t["adminPanel_event_evaluations"]}</h2>
                            <p>{t["adminPanel_conduct_evaluations_description"]}</p>
                            <button>{t["adminPanel_conduct_evaluations_button"]}</button>
                        </section>
                    </section>
                </>
            )}
            {user.role && user.role === "cliente" && (
                <>
                    <h1>{t["adminPanel_client_panel"]}</h1>
                    <section className="sections-container">
                        <section className="customer-section">
                            <h2>{t["adminPanel_booking_history"]}</h2>
                            <p>{t["adminPanel_view_history_description"]}</p>
                            <button>{t["adminPanel_view_history_button"]}</button>
                        </section>
                        <section className="customer-section">
                            <h2>{t["adminPanel_booking_status"]}</h2>
                            <p>{t["adminPanel_check_status_description"]}</p>
                            <button>{t["adminPanel_check_status_button"]}</button>
                        </section>
                        <section className="customer-section">
                            <h2>{t["adminPanel_update_personal_information"]}</h2>
                            <p>{t["adminPanel_update_information_description"]}</p>
                            <button>{t["adminPanel_update_information_button"]}</button>
                        </section>
                        <section className="customer-section">
                            <h2>{t["adminPanel_queries_support"]}</h2>
                            <p>{t["adminPanel_make_query_description"]}</p>
                            <button>{t["adminPanel_make_query_button"]}</button>
                        </section>
                        <section className="customer-section">
                            <h2>{t["adminPanel_exclusive_promotions"]}</h2>
                            <p>{t["adminPanel_view_promotions_description"]}</p>
                            <button>{t["adminPanel_view_promotions_button"]}</button>
                        </section>
                        <section className="customer-section">
                            <h2>{t["adminPanel_recommendations_opinions"]}</h2>
                            <p>{t["adminPanel_send_opinion_description"]}</p>
                            <button>{t["adminPanel_send_opinion_button"]}</button>
                        </section>
                        <section className="customer-section">
                            <h2>{t["adminPanel_help_resources"]}</h2>
                            <p>{t["adminPanel_get_help_description"]}</p>
                            <button>{t["adminPanel_get_help_button"]}</button>
                        </section>
                    </section>
                </>
            )}
        </section>
    );
};

export default AdminPanel;
