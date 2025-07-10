<?php

namespace App\Admin\UserAdmin\Infrastructure\Controller;

use App\Admin\Core\Infrastructure\Entity\UserAdmin;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserAdminCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return UserAdmin::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('firstname'),
            TextField::new('lastname'),
            TextField::new('email'),
        ];
    }
}
